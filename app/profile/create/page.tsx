import { createProfileAction } from "@/actions/actions"
import { SubmitButton } from "@/components/form/Buttons"
import FormContainer from "@/components/form/FormContainer"
import FormInput from "@/components/form/FormInput"
import { currentUser } from "@clerk/nextjs/server"
import { redirect } from "next/navigation"

const CreateProfile = async() => {
  const user= await currentUser()
  if(user?.privateMetadata.hasProfile) redirect('/') //ป้องกันหลังสร้าง username แล้วไม่ให้ไปหน้า create

  return (
    <section>
            <h1 className="text-2xl font-semibold mb-8 capitalize">new user</h1>
            <div className="border p-8 rounded-md max-w-full">
                <FormContainer action={createProfileAction} >
                    <div className="grid md:grid-cols-2 gap-4 mt-4">
                      <FormInput name="firstName" label="First Name" type="text" placeholder="First Name"/>
                      <FormInput name="lastName" label="Last Name" type="text" placeholder="Last Name"/>
                      <FormInput name="userName" label="User Name" type="text" placeholder="User Name"/>
                    </div>
                    <SubmitButton text="create profile" size="lg" className="mt-4 w-full"/>
                </FormContainer>
            </div>
    </section>
  )
}
export default CreateProfile