// "use client";

// import Image from "next/image";
// import { useState, use } from "react";

// export default function ServicePage({ params }) {
//   const { service } = use(params); // ✅ UNWRAP PROMISE

//   const services = [
//     {
//       slug: "back-spine-rehab",
//       title: "Back & Spine Rehabilitation",
//       tag: "Pain Relief",
//       goal: "Regain full functionality",
//       image: "/lowdiskpain.png",
//       faqs: [
//         {
//           q: "What is sports physiotherapy?",
//           a: "Sports physiotherapy helps recover from injuries."
//         }
//       ]
//     },
//     {
//       slug: "sports-injury-recovery",
//       title: "Sports Injury Recovery",
//       tag: "Strength",
//       goal: "Return to peak performance",
//       image: "/lowdiskpain.png",
//       faqs: [
//         {
//           q: "How long does recovery take?",
//           a: "Depends on injury severity."
//         },
//           {
//           q: "How long does recovery take?",
//           a: "Depends on injury severity."
//         },
//           {
//           q: "How long does recovery take?",
//           a: "Depends on injury severity."
//         },
//           {
//           q: "How long does recovery take?",
//           a: "Depends on injury severity."
//         },
//       ]
//     }
//   ];

//   const serviceData = services.find(s => s.slug === service);

//   const [open, setOpen] = useState([]);

//   if (!serviceData) return null;

//   const toggle = (i) =>
//     setOpen(prev =>
//       prev.includes(i)
//         ? prev.filter(x => x !== i)
//         : [...prev, i]
//     );

//   return (
//     <section className="pt-32 bg-[#F5F7FA]">
//       <div className="max-w-[1440px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-8">

//         {/* LEFT */}
//         <aside className="hidden lg:block bg-white rounded-xl p-4 h-fit">
//           <h4 className="font-semibold mb-4">
//             Explore Recovery Resources
//           </h4>

//           {services.map((s) => (
//             <a
//               key={s.slug}
//               href={`/ourservice/serviceoffered/${s.slug}`}
//               className={`block rounded-md py-2 mb-2 text-center
//                 ${s.slug === service ? "bg-green-200 font-semibold" : "bg-[#EAF6EA]"}`}
//             >
//               {s.title}
//             </a>
//           ))}
//         </aside>

//         {/* RIGHT */}
//         <div className="bg-white rounded-xl p-6">
//           <Image
//             src={serviceData.image}
//             alt=""
//             width={900}
//             height={400}
//             className="rounded-xl w-full"
//           />

//           <h1 className="text-2xl font-bold text-[#014579] mt-6">
//             {serviceData.title}
//           </h1>

//           {/* FAQ */}
//           <div className="mt-8 space-y-4">
//             {serviceData.faqs.map((faq, i) => (
//               <div key={i} className="border-b pb-3">
//                 <button
//                   onClick={() => toggle(i)}
//                   className="w-full flex justify-between font-medium"
//                 >
//                   {faq.q}
//                   <span>{open.includes(i) ? "−" : "+"}</span>
//                 </button>

//                 {open.includes(i) && (
//                   <p className="mt-2 text-sm text-[#757575]">
//                     {faq.a}
//                   </p>
//                 )}
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* MOBILE BOTTOM */}
//         <div className="lg:hidden mt-8">
//           <h4 className="font-semibold mb-4">
//             Explore Recovery Resources
//           </h4>

//           {services.map((s) => (
//             <a
//               key={s.slug}
//               href={`/ourservice/serviceoffered/${s.slug}`}
//               className="block bg-[#EAF6EA] text-center rounded-md py-2 mb-2"
//             >
//               {s.title}
//             </a>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

"use client";

import Link from "next/link";

export default function ServicePage() {
  return (
    <div className="h-screen w-full flex flex-col items-center justify-center bg-[#F5F7FA] px-6 text-center">
      <h1 className="text-[clamp(24px,3vw,40px)] font-bold text-[#014579]">
        Hey 👋 We Care
      </h1>

      <p className="mt-6 text-[clamp(14px,1.2vw,18px)] text-[#616161] max-w-xl">
        We&apos;re currently working on this page to give you the best possible
        experience.
        <br />
        Thank you for your patience and we sincerely apologize for the
        inconvenience.
      </p>

      <div className="mt-8">
        <Link
          href={"/"}
          className="px-6 py-3 rounded-xl bg-[#229D2E] text-white font-medium hover:opacity-90 transition"
        >
          Go Back Home
        </Link>
      </div>
    </div>
  );
}
