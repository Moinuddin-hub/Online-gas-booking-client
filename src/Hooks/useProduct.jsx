
import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const useProduct = () => {
  const axiosPublic = useAxiosPublic();
  //     const [menu,setMenu]=useState([]);
  //     const[loading,setLoading]=useState(true);

  //     useEffect(()=>{
  //      fetch('https://bistro-bose-server.vercel.app/menu')
  //      .then(res=>res.json())
  //      .then(data=>{
  //          setMenu(data);
  //          setLoading(false);
  //      })
  //     },[])
  //     return[menu,loading]
  const {refetch, data: product = [] } = useQuery({
    queryKey: ["product"],
    queryFn: async () => {
      const res = await axiosPublic.get("/product");
      return res.data;
    },
  });
  return [product, refetch];
};

export default useProduct;
