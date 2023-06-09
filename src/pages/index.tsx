import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="mb-8">
        <Image src="/images/tasks.svg" width={100} height={100} alt="Tasks Logo" />
      </div>
      <p className="text-center leading-relaxed">
        <span className="whitespace-pre-line font-bold">
          Welcome to our task scheduling website, 
          
          <br />
          where you can easily manage your to-do list and stay on top of your daily responsibilities. 
        </span>

        <br />
        <br />

        <span className="whitespace-pre-line font-bold">
          With our user-friendly interface, you can create and prioritize tasks, set reminders, 
          <br />

          and track progress all in one place. 
        </span>

        <br />

        <span className="whitespace-pre-line relative -top-3 font-bold">
          <br />
          Whether you're a busy professional or a student with a packed schedule,
          <br />

          our platform is designed to help you stay organized and productive. 
        </span>
    
        <br />
        <br />
        <span className="whitespace-pre-line relative -top-5 font-bold">
          Sign up today and start achieving your goals with ease!
        </span>
      </p>
    </div>
  )
}
