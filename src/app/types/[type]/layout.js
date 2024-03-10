export default function TypeLayout({ children }) {
   return <div>{children}</div>
}

export async function generateMetadata({ params }) {
   return {
      title: `${params.type} exploration`,
      description: `Explore ${params.type} with my platform. Read useful information about it.`,
   }
}
