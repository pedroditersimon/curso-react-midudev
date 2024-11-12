import { Card, Button, Title, TextInput, Badge } from "@tremor/react";
import { useUserStore } from "../hooks/useUserStore";
import { useState } from "react";

export default function CreateNewUser() {
	const { addUser } = useUserStore();
	const [result, setResult] = useState<"ok" | "ko" | null>(null);

	const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();

		setResult(null);

		const form = event.target as HTMLFormElement;
		const formData = new FormData(form);

		const name = formData.get("name") as string;
		const email = formData.get("email") as string;
		const github = formData.get("github") as string;

		if (!name || !email || !github) {
			return setResult("ko");
		}

		addUser({ name, email, github });
		form.reset();
		setResult("ok");
	};

	return (
		<Card>
			<Title>Create new user</Title>

			<form onSubmit={handleSubmit}>
				<TextInput name="name" placeholder="Pedro" />
				<TextInput name="email" placeholder="pedrito@gmail.com" />
				<TextInput name="github" placeholder="pedrito" />
				<Button>Crear</Button>
				<span>
					{result === "ok" && <Badge color="green">Gurdado!</Badge>}
					{result === "ko" && <Badge color="red">Revisa los campos</Badge>}
				</span>
			</form>
		</Card>
	);
}
