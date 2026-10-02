import Link from "next/link";

const blogs = [
    {
        id: 1,
        title: "Getting Started with Next.js",
        description:
            "Learn the basics of Next.js and how to build modern, fast, and scalable web applications.",
        author: "Khadiza Khatun",
        category: "Next.js",
        date: "October 1, 2026",
        image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c",
    },
    {
        id: 2,
        title: "Why JavaScript Is Important for Web Development",
        description:
            "JavaScript is one of the most important technologies for creating interactive and dynamic websites.",
        author: "Khadiza Khatun",
        category: "JavaScript",
        date: "September 28, 2026",
        image: "https://images.unsplash.com/photo-1627398242454-45a1465c2479",
    },
    {
        id: 3,
        title: "Building Responsive Websites with Tailwind CSS",
        description:
            "Discover how Tailwind CSS can help you create beautiful and responsive websites faster.",
        author: "Khadiza Khatun",
        category: "CSS",
        date: "September 25, 2026",
        image: "https://images.unsplash.com/photo-1507721999472-8ed4421c4af2",
    },
    {
        id: 4,
        title: "My Journey as a Web Developer",
        description:
            "A personal journey of learning web development, building projects, solving problems, and improving every day.",
        author: "Khadiza Khatun",
        category: "Career",
        date: "September 20, 2026",
        image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
    },
];

export default function BlogsPage() {
    return (
        <div>
            <h2 className="text-3xl font-bold">Blogs</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 items-center justify-center gap-12 mt-10">
                {
                    blogs.map(blog => (
                        <div key={blog.id} className="py-10 space-y-4 p-6 bg-fuchsia-700 rounded">
                            <img src={blog.image} alt="" className="w-100 h-70 object-cover mx-auto" />
                            <h2 className="font-semibold text-xl">{blog.title}</h2>
                            <p>{blog.description}</p>

                            <Link href={`/blogs/${blog.id}`} className="text-lime-500 font-semibold">View Details</Link>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}
