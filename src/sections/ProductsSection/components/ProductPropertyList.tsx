import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBoxOpen,
  faCalendarDays,
  faDroplet,
  faLocationDot,
  faRulerCombined,
  faSeedling,
} from "@fortawesome/free-solid-svg-icons";
import type { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import type { ProductProperty, ProductPropertyIcon } from "@/domain/landing";

export interface ProductPropertyListProps {
  idPrefix: string;
  items: ProductProperty[];
  iconColor: string;
  borderColor: string;
  className?: string;
}

const propertyIcons: Record<ProductPropertyIcon, IconDefinition> = {
  origin: faLocationDot,
  season: faCalendarDays,
  variety: faSeedling,
  caliber: faRulerCombined,
  flavor: faDroplet,
  presentation: faBoxOpen,
};

export function ProductPropertyList({
  idPrefix,
  items,
  iconColor,
  borderColor,
  className = "mt-7",
}: ProductPropertyListProps) {
  return (
    <dl className={`${className} divide-y`} style={{ borderColor }}>
      {items.map((item) => (
        <div
          className="grid grid-cols-[28px_1fr] gap-x-4 py-3 sm:grid-cols-[30px_1fr_1fr]"
          key={`${idPrefix}-${item.label}`}
        >
          <dt className="contents">
            <FontAwesomeIcon
              icon={propertyIcons[item.icon]}
              className="mt-1 h-4 w-4"
              style={{ color: iconColor }}
              aria-hidden
            />
            <span className="text-sm font-bold text-[#314a3d]">{item.label}</span>
          </dt>
          <dd className="col-start-2 text-sm font-semibold text-[#1d3429] sm:col-start-3">
            {item.value}
          </dd>
        </div>
      ))}
    </dl>
  );
}
