export default function EmptyState({ text }: { text: string }) {
  return (
    <div className="flex flex-col justify-center items-center">
      <img src="/empty.svg" alt="empty todo" />
      <p className="mt-2">{text}</p>
    </div>
  )
}
