// import { BlogPosts } from 'app/components/posts'

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        My Portfolio
      </h1>
      <p className="mb-4">
        {`I am a 19-year-old French developer and a recent graduate from a computer science school in Paris,
        where I studied several areas of software development, including low-level programming with C. I
        have been passionate about technology since I was 13, and over the years I have built various
        personal projects in web development as well as iOS and Android mobile applications.
        Although I do not have professional experience yet, my studies and personal projects have helped
        me develop a solid technical foundation and a strong willingness to learn.`}
      </p>
      {/* <div className="my-8">
        <BlogPosts />
      </div> */}
    </section>
  )
}
