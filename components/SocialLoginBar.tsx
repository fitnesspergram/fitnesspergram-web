import Image from "next/image";

const SocialLoginBar = ({ service }: { service: string }) => {
  return (
    <div className="rounded-full w-[300px] h-[50px] p-3 border border-black flex items-center justify-center gap-x-3">
      {service == "google" && (
        <>
          <Image src="/google-logo.svg" alt="google" width={30} height={30} />
          <p className="font-semibold">Continue with Google</p>
        </>
      )}
      {service == "apple" && (
        <>
          <Image
            src="/facebook-logo.svg"
            alt="facebook"
            width={30}
            height={30}
          />
          <p className="font-semibold">Continue with Facebook</p>
        </>
      )}
      {service == "facebook" && (
        <>
          <Image src="/apple-logo.svg" alt="apple" width={30} height={30} />
          <p className="font-semibold">Continue with Apple</p>
        </>
      )}
    </div>
  );
};

export default SocialLoginBar;
