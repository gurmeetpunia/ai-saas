import { Settings } from "lucide-react";

import { Heading } from "@/components/heading";

const SettingsPage = async () => {
  
  return ( 
    <div>
      <Heading
        tittle="Settings"
        description="Manage account settings."
        icon={Settings}
        iconColor="text-gray-700"
        bgColor="bg-gray-700/10"
      />
    </div>
   );
}
 
export default SettingsPage;