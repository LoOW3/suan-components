import type { ReactNode } from "react";

interface ButtonProps {
	children: ReactNode;
}

export const ButtonWithoutCVA = ({ children }: ButtonProps): ReactNode => {
	return <button className="bg-orange-700 text-white font-semibold px-6 py-1 hover:bg-orange-800 rounded-md">{children}</button>;
};