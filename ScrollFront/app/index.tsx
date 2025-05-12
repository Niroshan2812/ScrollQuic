import { useEffect } from "react";
import { useRouter } from "expo-router";

export default function Index() {
  const router = useRouter();

  useEffect(() => {
    // Redirect to the home page
   const timeout = setTimeout(() => {
      router.replace('/(authenticated)/reles' ) ;; 

   },100);
    // Cleanup the timeout on unmount
    return () => clearTimeout(timeout);
  }, []);

  return null; // No need to render anything here
}