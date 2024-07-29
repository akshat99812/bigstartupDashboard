
import img from "../assets/img/img1.png";
export const ProfileCard=()=>{

    const profileData={
        name:"Riddhima Sen",
        email:"rekha88emailme @gmail.com",
        phone:"6398421489",
        image:""
    }

    return (
        <div className="text-center">
            <div className="flex justify-center">
                <img src={img} className="w-20 h-20 rounded-full"></img>
            </div>
            <div className="text-lg font-bold font-aktiv-medium mt-2">
                {profileData.name}
            </div>
            <div className="text-slate-500">
                Startup Consultant
            </div>
            <div className="mt-2">
                {profileData.phone}
            </div>
            <div>
                {profileData.email}
            </div>
        </div>
    )
}