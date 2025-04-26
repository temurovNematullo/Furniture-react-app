import ContentLoader from "react-content-loader";

const LoaderProductCard = (props: any) => (
  //   <ContentLoader
  //     speed={1.5}
  //     width={270}
  //     height={400}
  //     viewBox="0 0 270 400"
  //     backgroundColor="#e0e0e0"
  //     foregroundColor="#d1d1d1"
  //   >
  //     {/* Картинка */}
  //     <rect x="0" y="0" rx="10" ry="10" width="270" height="200" />

  //     {/* Название и Цена */}
  //     <rect x="0" y="220" rx="5" ry="5" width="150" height="20" />
  //     <rect x="170" y="220" rx="5" ry="5" width="70" height="20" />

  //     {/* Описание */}
  //     <rect x="0" y="260" rx="5" ry="5" width="270" height="40" />

  //     {/* Кнопка */}
  //     <rect x="0" y="320" rx="8" ry="8" width="135" height="40" />
  //   </ContentLoader>
  <ContentLoader
    speed={2}
    width={260}
    height={389}
    viewBox="0 0 260 389"
    backgroundColor="#b09696"
    foregroundColor="#e7dada"
    {...props}
  >
    <rect x="-1" y="1" rx="10" ry="10" width="260" height="200" />
    <rect x="0" y="217" rx="10" ry="10" width="260" height="30" />
    <rect x="0" y="349" rx="10" ry="10" width="108" height="40" />
    <rect x="0" y="268" rx="10" ry="10" width="260" height="25" />
    <rect x="0" y="303" rx="10" ry="10" width="159" height="25" />
  </ContentLoader>
);

export default LoaderProductCard;
