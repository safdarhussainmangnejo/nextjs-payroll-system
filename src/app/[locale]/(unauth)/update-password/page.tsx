"use client";
import PasswordInput from "@/components/PasswordUpdate/PasswordInput";
import PasswordRequirement from "@/components/PasswordUpdate/PasswordRequirement";
import SubmitButton from "@/components/PasswordUpdate/SubmitButton";
import Footer from "@/components/ResetPassword/Footer";
import React from "react";


const PasswordUpdateForm =  () => {
  const [newPassword, setNewPassword] = React.useState("");
  const [confirmPassword, setConfirmPassword] = React.useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setNewPassword(newPassword);
    setConfirmPassword(confirmPassword);
  };

  return (
    <main className="flex overflow-hidden flex-col bg-white">
      <section className="flex overflow-hidden relative flex-col items-center px-20 pt-64 pb-6 w-full min-h-[1023px] max-md:px-5 max-md:pt-24 max-md:max-w-full">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/4e5386cd3cb253dd501d301b370c7da7d8542f3643bbe1071d9ec1611938cb5e?apiKey=3134160d320944cb9be378a5d06b0bb6&&apiKey=3134160d320944cb9be378a5d06b0bb6"
          alt=""
          className="object-cover absolute inset-0 size-full"
        />
        <div className="flex relative flex-col max-w-full w-[486px]">
          <form
            onSubmit={handleSubmit}
            className="flex flex-col justify-center w-full rounded-2xl max-md:mr-1.5 max-md:max-w-full"
          >
            <header className="flex flex-col justify-center w-full text-center max-md:max-w-full">
              <h1 className="text-3xl font-bold leading-none text-gray-900 max-md:max-w-full">
                Update your password
              </h1>
              <p className="mt-4 text-lg leading-7 text-zinc-900 max-md:max-w-full">
                Set your new password with minimum 8 characters with a
                combination of letters and numbers
              </p>
            </header>
            <div className="flex flex-col mt-8 w-full max-md:max-w-full">
              <PasswordInput
                label="New Password"
                value={newPassword}
                onChange={(e: any) => setNewPassword(e.target.value)}
              />
              <div className="grid grid-cols-2 gap-4 mt-4 mb-5 w-full text-sm leading-relaxed max-w-[480px] max-md:max-w-full">
                <div>
                  <PasswordRequirement
                    text="8 characters"
                    fulfilled={newPassword.length >= 8}
                  />
                  <PasswordRequirement
                    text="Uppercase letter (A-Z)"
                    fulfilled={/[A-Z]/.test(newPassword)}
                  />
                </div>
                <div>
                  <PasswordRequirement
                    text="Number (0-9)"
                    fulfilled={/\d/.test(newPassword)}
                  />
                  <PasswordRequirement
                    text="Lowercase letter (a-z)"
                    fulfilled={/[a-z]/.test(newPassword)}
                  />
                </div>
              </div>

              <PasswordInput
                label="Confirmation New Password"
                value={confirmPassword}
                onChange={(e: any) => setConfirmPassword(e.target.value)}
              />
            </div>
            <SubmitButton />
          </form>
          <Footer />
        </div>
      </section>
    </main>
  );
};

export default PasswordUpdateForm;

// "use client";
// import PasswordInput from "@/components/PasswordUpdate/PasswordInput";
// import PasswordRequirement from "@/components/PasswordUpdate/PasswordRequirement";
// import SubmitButton from "@/components/PasswordUpdate/SubmitButton";
// import Footer from "@/components/ResetPassword/Footer";
// import React from "react";

// interface PasswordUpdateFormProps {
//   onSubmit: (newPassword: string, confirmPassword: string) => void;
// }

// const PasswordUpdateForm: React.FC<PasswordUpdateFormProps> = ({
//   onSubmit,
// }) => {
//   const [newPassword, setNewPassword] = React.useState("");
//   const [confirmPassword, setConfirmPassword] = React.useState("");

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     onSubmit(newPassword, confirmPassword);
//   };

//   return (
//     <main className="flex overflow-hidden flex-col bg-white">
//       <section className="flex overflow-hidden relative flex-col items-center px-20 pt-64 pb-6 w-full min-h-[1023px] max-md:px-5 max-md:pt-24 max-md:max-w-full">
//         <img
//           loading="lazy"
//           src="https://cdn.builder.io/api/v1/image/assets/TEMP/4e5386cd3cb253dd501d301b370c7da7d8542f3643bbe1071d9ec1611938cb5e?apiKey=3134160d320944cb9be378a5d06b0bb6&&apiKey=3134160d320944cb9be378a5d06b0bb6"
//           alt=""
//           className="object-cover absolute inset-0 size-full"
//         />
//         <div className="flex relative flex-col max-w-full w-[486px]">
//           <form
//             onSubmit={handleSubmit}
//             className="flex flex-col justify-center w-full rounded-2xl max-md:mr-1.5 max-md:max-w-full"
//           >
//             <header className="flex flex-col justify-center w-full text-center max-md:max-w-full">
//               <h1 className="text-3xl font-bold leading-none text-gray-900 max-md:max-w-full">
//                 Update your password
//               </h1>
//               <p className="mt-4 text-lg leading-7 text-zinc-900 max-md:max-w-full">
//                 Set your new password with minimum 8 characters with a
//                 combination of letters and numbers
//               </p>
//             </header>
//             <div className="flex flex-col mt-8 w-full max-md:max-w-full">
//               <PasswordInput
//                 label="New Password"
//                 value={newPassword}
//                 onChange={(e: any) => setNewPassword(e.target.value)}
//               />
//               <div className="grid grid-cols-2 gap-4 mt-4 mb-5 w-full text-sm leading-relaxed max-w-[480px] max-md:max-w-full">
//                 <div>
//                   <PasswordRequirement
//                     text="8 characters"
//                     fulfilled={newPassword.length >= 8}
//                   />
//                   <PasswordRequirement
//                     text="Uppercase letter (A-Z)"
//                     fulfilled={/[A-Z]/.test(newPassword)}
//                   />
//                 </div>
//                 <div>
//                   <PasswordRequirement
//                     text="Number (0-9)"
//                     fulfilled={/\d/.test(newPassword)}
//                   />
//                   <PasswordRequirement
//                     text="Lowercase letter (a-z)"
//                     fulfilled={/[a-z]/.test(newPassword)}
//                   />
//                 </div>
//               </div>

//               <PasswordInput
//                 label="Confirmation New Password"
//                 value={confirmPassword}
//                 onChange={(e: any) => setConfirmPassword(e.target.value)}
//               />
//             </div>
//             <SubmitButton />
//           </form>
//           <Footer />
//         </div>
//       </section>
//     </main>
//   );
// };

// export default PasswordUpdateForm;
