export function Section({ children, id }: { children: React.ReactNode, id: string }) {
    return (
        <section id={id} className="py-8 md:py-16 bg-muted/50">
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto">
                    {children}
                </div>
            </div>
        </section>
    )
}