import {
  Body,
  Button,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Link,
  Preview,
  render,
  Section,
  Tailwind,
  Text,
} from "@react-email/components";

interface VerificationEmailProps {
  url: string;
  userEmail?: string; // Opcional, para personalizar
}

export const VerificationEmail = ({
  url,
  userEmail = "toonify user",
}: VerificationEmailProps) => {
  const previewText = `Bienvenido a Toonify. Verifica tu email para comenzar.`;

  return (
    <Html>
      <Head />
      <Preview>{previewText}</Preview>
      <Tailwind
        config={{
          theme: {
            extend: {
              colors: {
                brand: {
                  start: "#00C6FF",
                  end: "#5A4FCF",
                  dark: "#2D3748",
                },
              },
            },
          },
        }}
      >
        <Body className="bg-gray-50 font-sans text-brand-dark my-auto mx-auto">
          <Container className="border border-gray-200 my-10 rounded-lg mx-auto p-8 max-w-[480px] bg-white shadow-sm">
            {/* LOGO HEADER */}
            <Section className="mt-4 mb-8 text-center">
              {/*
                  Nota: Para producción, lo ideal es hostear tu SVG/PNG y usar <Img />.
                  Aquí simulo el logo con texto y estilos para que funcione sin assets externos.
               */}
              <Text className="text-3xl font-bold tracking-tighter m-0">
                toon<span className="text-[#5A4FCF]">ify</span>
              </Text>
            </Section>

            {/* CONTENIDO PRINCIPAL */}
            <Heading className="text-2xl font-bold text-center p-0 my-4 mx-0 text-gray-800">
              Verifica tu correo electrónico
            </Heading>

            <Text className="text-base leading-relaxed text-gray-600 text-center mb-8">
              ¡Hola <strong>{userEmail}</strong>! Estamos emocionados de que te
              unas a Toonify. Para asegurar la seguridad de tu cuenta, por favor
              verifica tu dirección haciendo clic abajo.
            </Text>

            {/* BOTÓN CTA CON GRADIENTE */}
            <Section className="text-center my-8">
              <Button
                className="bg-[#5A4FCF] rounded-full text-white text-base font-bold no-underline text-center py-3 px-8 block w-full shadow-md"
                href={url}
                style={{
                  // Fallback para clientes que no soportan gradientes
                  backgroundColor: "#5A4FCF",
                  // Gradiente CSS inline (algunos clientes lo soportan, otros usan el bg color)
                  backgroundImage:
                    "linear-gradient(to right, #00C6FF, #5A4FCF)",
                }}
              >
                Verificar mi cuenta
              </Button>
            </Section>

            <Text className="text-sm text-gray-500 text-center mt-8 mb-4">
              O copia y pega este enlace en tu navegador:
              <br />
              <Link className="text-[#00C6FF] underline break-all" href={url}>
                {url}
              </Link>
            </Text>

            <Hr className="border-gray-200 my-6" />

            {/* FOOTER */}
            <Text className="text-xs text-gray-400 text-center">
              Si no solicitaste esta verificación, puedes ignorar este correo
              con seguridad.
              <br />© {new Date().getFullYear()} Toonify Inc. Todos los derechos
              reservados.
            </Text>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

export const renderTemplate = async (props: VerificationEmailProps) => {
  return await render(<VerificationEmail {...props} />);
};

export default VerificationEmail;
