interface TariffListItemProps {
    numListItem: number;
    text: any;
}

export default function ({numListItem, text}: TariffListItemProps) {
  return (
    <>
      <div>
        <h3 className="text-bold text-xl mb-3">-{numListItem}-</h3>
        <h3 className="text-bold text-xl mb-6">Пакет</h3>
        <p>{text}</p>
      </div>
    </>
  );
}