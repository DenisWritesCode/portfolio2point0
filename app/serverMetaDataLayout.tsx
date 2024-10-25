import RootLayoutClient from "./rootLayoutClient";



export default function ServerMetadataLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <RootLayoutClient>
      {children}
    </RootLayoutClient>
  );
}
