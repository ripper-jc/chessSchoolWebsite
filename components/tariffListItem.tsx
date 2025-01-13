import { JSX } from "react";

interface TariffListItemProps {
    numListItem: number;
    text: JSX.Element; // Changed from 'any' to 'string'
}

function TariffListItem({numListItem, text}: TariffListItemProps) {
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

TariffListItem.displayName = "TariffListItem"; // Added display name

export default TariffListItem;