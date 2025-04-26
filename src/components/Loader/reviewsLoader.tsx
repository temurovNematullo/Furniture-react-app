import ContentLoader from "react-content-loader";

const ReviewsLoader = (props: any) => (
  <ContentLoader
    speed={2}
    width={579}
    height={215}
    viewBox="0 0 579 215"
    backgroundColor="#b09696"
    foregroundColor="#e7dada"
    {...props}
  >
    <rect x="199" y="0" rx="10" ry="10" width="380" height="40" />
    <rect x="199" y="61" rx="10" ry="10" width="380" height="25" />
    <rect x="199" y="95" rx="10" ry="10" width="380" height="25" />
    <rect x="199" y="129" rx="10" ry="10" width="380" height="25" />
    <rect x="0" y="0" rx="10" ry="10" width="180" height="215" />
    <rect x="199" y="190" rx="10" ry="10" width="260" height="25" />
  </ContentLoader>
);

export default ReviewsLoader;
