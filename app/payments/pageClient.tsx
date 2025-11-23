"use client";

import { useState, useMemo, ReactNode } from "react";
import { Card, Input, Notification, Select, Header } from "@/src/components";
import Loading from "../loading";
import { Session } from "@/src/lib/auth";
import { useQuery } from "@tanstack/react-query";
import { FaCheck, FaClock, FaTrash, FaCalendar, FaUser } from "react-icons/fa";
import { IoIosSettings } from "react-icons/io";
import { useAppDispatch } from "@/src/store/hooks";
import { addNotification } from "@/src/store/notificationsSlice";

import type { payments } from "./types";

interface PaymentsPageClientProps {
  session: Session;
}

type NotificationProps = {
  type: "ok" | "warning" | "error";
  title: string;
  description: string;
};

const statusIcons: Record<string, ReactNode> = {
  Aprobado: <FaCheck className="block md:hidden" />,
  Rechazado: <FaTrash className="block md:hidden" />,
  Pendiente: <FaClock className="block md:hidden" />,
};

export default function PaymentsPageClient({
  session,
}: PaymentsPageClientProps) {
  const [payments, setPayments] = useState<payments[]>([]);
  const [statusFilter, setStatusFilter] = useState<string>("Todos");
  const [search, setSearch] = useState<string>("");
  const [notification, setNotification] = useState<boolean>(false);
  const [notificationData, setNotificationData] = useState<NotificationProps>({
    title: "",
    type: "ok",
    description: "",
  });

  const { data, isPending, error } = useQuery({
    queryKey: ["payments"],
    queryFn: () => fetch("/api/payments").then((res) => res.json()),
  });

  if (data && payments.length === 0) {
    setPayments(data as payments[]);
  }

  const filteredPayments = useMemo(() => {
    return payments.filter((payment) => {
      const matchesStatus =
        statusFilter === "Todos" || payment.estatus === statusFilter;
      const matchesSearch = payment.proveedor
        .toLowerCase()
        .includes(search.toLowerCase());
      return matchesStatus && matchesSearch;
    });
  }, [payments, statusFilter, search]);

  const dispatch = useAppDispatch();

  async function handleAction(action: string, payment: payments) {
    try {
      setPayments(
        payments.map((p) => {
          if (p.id === payment.id) {
            return { ...p, estatus: action };
          }
          return p;
        })
      );
      const notifData = {
        type: "ok" as const,
        title: `Pago ${action}`,
        description: `El pago ha sido ${action.toLocaleLowerCase()}`,
      };
      setNotification(true);
      setNotificationData(notifData);
      dispatch(addNotification(notifData));
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      const errorData = {
        type: "error" as const,
        title: "Error",
        description: "Ha ocurrido un error al actualizar el pago",
      };
      setNotification(true);
      setNotificationData(errorData);
      dispatch(addNotification(errorData));
    }
  }

  if (isPending) return <Loading />;
  if (error) return <div>Error loading payments</div>;

  return (
    <>
      <Header session={session} />
      <Notification
        title={notificationData.title}
        type={notificationData.type}
        activation={notification}
        onClose={() => setNotification(false)}
      >
        {notificationData.description}
      </Notification>
      <main className="container mx-auto p-2 pb-6">
        <Card>
          <div className="flex flex-row items-center space-x-2 w-full md:w-1/2">
            <Select
              value={statusFilter}
              options={["Todos", "Pendiente", "Aprobado", "Rechazado"]}
              onChange={setStatusFilter}
            />
            <Input
              placeholder="Proveedor"
              value={search}
              onChange={setSearch}
            />
          </div>
        </Card>
        <section className="w-full pt-6">
          <div className="bg-gray-100 dark:bg-gray-900 text-slate-800 dark:text-slate-200 grid grid-cols-6 gap-4 p-2 font-semibold text-center">
            <div>ID</div>
            <div className="w-full flex items-center justify-center">
              <span className="hidden md:block">Proveedor</span>
              <FaUser className="block md:hidden" />
            </div>
            <div className="w-full flex items-center justify-center">
              <span className="hidden md:block">Monto</span>
              <span className="block md:hidden">$</span>
            </div>
            <div className="w-full flex items-center justify-center">
              <span className="hidden md:block">Estatus</span>
              <FaClock className="block md:hidden" />
            </div>
            <div className="w-full flex items-center justify-center">
              <span className="hidden md:block">Fecha</span>
              <FaCalendar className="block md:hidden" />
            </div>
            <div className="w-full flex items-center justify-center">
              <span className="hidden md:block">Acciones</span>
              <IoIosSettings className="block md:hidden" />
            </div>
          </div>
          <section className="text-center">
            {filteredPayments.map((payment: payments, index: number) => (
              <div
                key={payment.id}
                className={`grid grid-cols-6 gap-4 p-2 ${
                  index % 2 == 0 ? "bg-gray-300 dark:bg-gray-700" : ""
                }`}
              >
                <p>{payment.id}</p>
                <p className="text-sm">{payment.proveedor}</p>
                <p>${payment.monto}</p>
                <p>
                  <span className="hidden md:block">{payment.estatus}</span>
                  {statusIcons[payment.estatus]}
                </p>
                <p>{payment.fecha}</p>
                {payment.estatus === "Pendiente" && (
                  <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 items-center justify-evenly">
                    <FaCheck
                      className="text-2xl p-1 bg-green-500 rounded cursor-pointer"
                      onClick={() => handleAction("Aprobado", payment)}
                    />
                    <FaTrash
                      className="text-2xl p-1 bg-red-500 rounded cursor-pointer"
                      onClick={() => handleAction("Rechazado", payment)}
                    />
                  </div>
                )}
              </div>
            ))}
          </section>
        </section>
      </main>
    </>
  );
}
