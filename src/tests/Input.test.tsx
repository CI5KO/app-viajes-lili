import { render, screen, fireEvent } from "@testing-library/react";
import Input from "../components/atoms/Input";

describe("Input", () => {
  it("Renderizar", () => {
    const handleChange = jest.fn();
    render(<Input placeholder="Email" value="" onChange={handleChange} />);
    expect(screen.getByText("Email")).toBeInTheDocument();
  });

  it("Ejecutar onChange", () => {
    const handleChange = jest.fn();
    render(<Input value="" onChange={handleChange} />);
    const input = screen.getByRole("textbox");
    fireEvent.change(input, { target: { value: "test" } });
    expect(handleChange).toHaveBeenCalledWith("test");
  });

  it("Mostrar valor", () => {
    const handleChange = jest.fn();
    render(<Input value="test value" onChange={handleChange} />);
    expect(screen.getByDisplayValue("test value")).toBeInTheDocument();
  });

  it("Renderizar password", () => {
    const handleChange = jest.fn();
    const { container } = render(<Input type="password" value="" onChange={handleChange} />);
    const input = container.querySelector('input');
    expect(input).toHaveAttribute("type", "password");
  });
});
