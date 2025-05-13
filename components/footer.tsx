export default function Footer() {
  return (
    <footer className="w-full border-t bg-background py-6 flex justify-center">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row md:gap-6">
          <p className="text-center text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} ProQA Plus. All rights reserved.
          </p>
          <p className="text-center text-sm text-muted-foreground">
            Designed and Developed by{" "}
            <a
              href="https://discord.com/users/790260096063635467"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:text-primary/80 font-medium transition-colors"
            >
              Monke Manh
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
