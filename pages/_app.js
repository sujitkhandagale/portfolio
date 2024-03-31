// style
import "../style/global.scss";
import { connectDB } from "@/utils/db";

export default function MyApp({ Component, pageProps }) {
  // database connection
  connectDB();
  return <Component {...pageProps} />;
}
