import { motion, useScroll } from "framer-motion";
import { useRef } from "react";

export default function Introduction() {
    const { scrollYProgress } = useScroll();

    return (
        <motion.div
            initial={{ opacity: 0.6, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            className="grid grid-cols-1 sm:grid-cols-2 h-auto w-full bg-bg-img bg-cover p-6 sm:p-20"
        >
            <div className="h-fit sm:w-full text-black bg-gradient-to-bl from-white to-white border rounded-2xl p-6 sm:p-10">
                <h1 className="font-semibold text-xl sm:text-2xl leading-8">
                    <strong className="text-yellow-500 stroke-red-900">B</strong>asood Company
                </h1>
                <p className="text-sm sm:text-lg text-justify leading-7 sm:leading-8">
                    The heart of animal care since 2021. As Iraq`s leading supplier of
                    Basood products, we offer a wide range of animal medicines and
                    nutritious food. Experience compassionate veterinary care at our KADAN
                    VETERINARY CLINIC in Erbil, 60 Meter Street, or enjoy the convenience
                    of our home services. We also specialize in selling loving pets,
                    including rabbits, cats, and dogs. Join us in our mission to nurture
                    and protect the well-being of animals across Iraq. Trust Basood, where
                    every animal is family.
                </p>
            </div>
        </motion.div>
    );
}
