// import { BlogPosts } from 'app/components/posts'

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        My Portfolio
      </h1>
      <p className="mb-4">
        {`I am a 19-year-old French developer and a recent graduate from 42 Paris,
        where I had the opportunity to explore various areas of software development, including low-level programming with C.
        I've been interested in technology since I was 13, and I've been working on some personal projects
        in web development as well as iOS and Android mobile applications.
        I'm eager to apply what I've learned and continue growing as a developer through real-world projects and collaboration.
        I speak both English and French fluently.`}
      </p>
      {/* <div className="my-8">
        <BlogPosts />
      </div> */}
    </section>
  )
}
