
function About() {
  return (
    <section id='about' className='max-w-contentContainer mx-auto flex flex-col gap-8 mdl-px-10 cl:px-4 py-24'>
      <h2 className="text-2xl lgl:text-4xl  text-textLight mt-2 lgl:mt-4 font-semibold">
        About
      </h2>

      <div className="flex flex-col lgl:flex-row gap-16">
        <div className="w-full lgl:w-2/3 text-base text-textDark font-medium flex flex-col gap-4 font-mono">
          I am a software developer with over 8 years of experience in building solutions on multiple platforms.<br/><br/>
          Currently, I am working as a Senior Software Engineer at Simpplr, specializing in Integrations. I contribute to creation and maintenance of microservices based backend systems which interact with third party systems like Google and Azure. In addition to this, I have been responsible for guiding team members through building a web app, taking it from the initial stages of design and development to deployment on production <br/>
          I have also had the oppotunity to build salesforce applications utilising the tech stack provided by salesforce <br/>
          <h4 className="text-xl font-semibold">Languages</h4>
          <ol className="text-sm font-titleFont grid grid-cols-4 gap-1 list-disc list-inside">
            <li>Javascript</li>
            <li>Java</li>
            <li>Apex</li>
            <li>Typescript</li>
            <li>HTML5</li>
            <li>CSS</li>
            <li>SQL</li>
          </ol>

          <h4 className="text-xl font-semibold">Libraries and Frameworks</h4>
          <ol className="text-sm font-titleFont grid grid-cols-4 gap-1 list-disc list-inside">
            <li>React</li>
            <li>Next.js</li>
            <li>Axios</li>
            <li>Express</li>
            <li>Framer motion</li>
            <li>Particle.js</li>
          </ol>

          <h4 className="text-xl font-semibold">Tools and Technologies</h4>
          <ol className="text-sm font-titleFont grid grid-cols-4 gap-1 list-disc list-inside">
            <li>Salesforce</li>
            <li>AWS</li>
            <li>Node.js</li>
            <li>Git</li>
            <li>Docker</li>
            <li>Postman</li>
            <li>Jira</li>
            <li>Excel</li>
          </ol>
          <br/><br/>
        </div>
      </div>
    </section>
  )
}

export default About