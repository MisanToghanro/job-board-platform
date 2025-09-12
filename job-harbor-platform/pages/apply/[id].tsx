import ApplyForm from "@/components/jobs/ApplyForm"
import { useRouter } from "next/router"

const ApplyPage: React.FC = () => {

    const router = useRouter();
    const {id} = router.query;

    if (!id) return <p>please wait...</p>
   return(
      <ApplyForm jobId={Number(id)} />
    )
}
export default ApplyPage;


