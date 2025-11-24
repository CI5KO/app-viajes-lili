import { render, screen, fireEvent } from "@testing-library/react";
import Switch from "../components/atoms/Switch";

describe("Switch", () => {
  it("Renderizar Off", () => {
    const handleToggle = jest.fn();
    render(
      <Switch
        IconOn={<span>On</span>}
        IconOff={<span>Off</span>}
        isOn={false}
        onToggle={handleToggle}
      />
    );
    expect(screen.getByText("Off")).toBeInTheDocument();
  });

  it("Renderizar On", () => {
    const handleToggle = jest.fn();
    render(
      <Switch
        IconOn={<span>On</span>}
        IconOff={<span>Off</span>}
        isOn={true}
        onToggle={handleToggle}
      />
    );
    expect(screen.getByText("On")).toBeInTheDocument();
  });

  it("Ejecutar onToggle", () => {
    const handleToggle = jest.fn();
    render(
      <Switch
        IconOn={<span>On</span>}
        IconOff={<span>Off</span>}
        isOn={false}
        onToggle={handleToggle}
      />
    );
    fireEvent.click(screen.getByRole("button"));
    expect(handleToggle).toHaveBeenCalledTimes(1);
  });
});
