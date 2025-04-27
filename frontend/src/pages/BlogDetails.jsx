import { CalendarDays } from "lucide-react"
import React from "react"
<<<<<<< HEAD
import { useNavigate, useParams } from "react-router"
import { Button } from "../components/ui/button"
import { ChevronLeft } from "lucide-react"
=======
import { useState } from "react"
import { Link, useNavigate, useParams } from "react-router"
import { cn } from "../lib/utils"
import { Button } from "../components/ui/button"
import { ChevronLeft } from "lucide-react"
import { Share2 } from "lucide-react"
import { Bookmark } from "lucide-react"
import { Edit } from "lucide-react"
>>>>>>> 05d20f51ac2e90b57d9ccef1b7bc3ffecb3cb4b3
import BlogCard from "../components/BlogCard"

const blogPost = {
  id: "blog-1",
  title: "Understanding React Hooks: A Comprehensive Guide",
  content: `
      <p>React Hooks are a revolutionary addition to React that allow you to use state and other React features without writing a class. This makes it easier to reuse stateful logic between components and makes your code more readable.</p>
  
      <h2>Why Hooks?</h2>
      <p>Before Hooks, React didn't offer a way to "attach" reusable behavior to a component (for example, connecting it to a store). Hooks solve this problem by allowing you to reuse stateful logic without changing your component hierarchy.</p>
  
      <p>Hooks let you always use functions instead of having to juggle between functions, classes, higher-order components, and render props.</p>
  
      <h2>Basic Hooks</h2>
      <p>React comes with several built-in Hooks. Let's take a look at the most commonly used ones:</p>
  
      <h3>1. useState</h3>
      <p>The useState Hook lets you add React state to function components. It returns a stateful value and a function to update it.</p>
  
      <h3>2. useEffect</h3>
      <p>The useEffect Hook lets you perform side effects in function components. It serves the same purpose as componentDidMount, componentDidUpdate, and componentWillUnmount in React classes, but unified into a single API.</p>
  
      <h3>3. useContext</h3>
      <p>The useContext Hook accepts a context object and returns the current context value for that context. It lets you read and subscribe to context without introducing nesting.</p>
  
      <h2>Additional Hooks</h2>
      <p>React also provides several additional Hooks that are less commonly used but still very useful in specific situations:</p>
  
      <h3>1. useReducer</h3>
      <p>useReducer is usually preferable to useState when you have complex state logic that involves multiple sub-values or when the next state depends on the previous one.</p>
  
      <h3>2. useCallback</h3>
      <p>useCallback returns a memoized version of the callback that only changes if one of the dependencies has changed. This is useful when passing callbacks to optimized child components that rely on reference equality to prevent unnecessary renders.</p>
  
      <h3>3. useMemo</h3>
      <p>useMemo returns a memoized value. This Hook is used to memoize expensive calculations so that they are not re-executed on every render.</p>
  
      <h3>4. useRef</h3>
      <p>useRef returns a mutable ref object whose .current property is initialized to the passed argument. The returned object will persist for the full lifetime of the component.</p>
  
      <h2>Building Custom Hooks</h2>
      <p>One of the most powerful features of Hooks is that you can create your own Hooks. This allows you to extract component logic into reusable functions.</p>
  
      <p>A custom Hook is a JavaScript function whose name starts with "use" and that may call other Hooks. For example, here's a custom Hook that handles form state:</p>
  
      <h2>Rules of Hooks</h2>
      <p>Hooks are JavaScript functions, but they impose two additional rules:</p>
      <p>1. Only call Hooks at the top level. Don't call Hooks inside loops, conditions, or nested functions.</p>
      <p>2. Only call Hooks from React function components or custom Hooks. Don't call Hooks from regular JavaScript functions.</p>
  
      <h2>Conclusion</h2>
      <p>React Hooks have revolutionized the way we write React components. They allow for more concise, reusable code that's easier to understand and maintain. By mastering Hooks, you can take your React skills to the next level and build more efficient, elegant applications.</p>
    `,
  coverImage:
    "https://images.unsplash.com/photo-1555099962-4199c345e5dd?auto=format&fit=crop&q=80",
  author: "Sarah Williams",
  authorImage: "https://randomuser.me/api/portraits/women/44.jpg",
  date: "April 1, 2025",
<<<<<<< HEAD
=======
  readTime: "5 min read",
>>>>>>> 05d20f51ac2e90b57d9ccef1b7bc3ffecb3cb4b3
  tags: ["React", "Hooks", "JavaScript"],
}

const BlogDetails = () => {
  const { id } = useParams()
  console.log(id)
<<<<<<< HEAD
=======
  const [isScrolled, setIsScrolled] = useState(false)
>>>>>>> 05d20f51ac2e90b57d9ccef1b7bc3ffecb3cb4b3
  const navigate = useNavigate()

  const post = blogPost

  return (
    <main className="pt-16">
      {/* Blog title and cover image */}
      <div className="relative h-[50vh] sm:h-[60vh] bg-gray-100">
        <div className="absolute top-0 left-0 right-0 p-6 md:p-8 max-w-4xl mx-auto">
          <Button size="sm" variant='outline' className="  absolute top-4 left-4 z-10" onClick={() => navigate(-1)}>
            <ChevronLeft className="h-4 w-4" />
            Back
          </Button>
        </div>
        <img
          src={post.coverImage}
          alt={post.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/20"></div>

        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 max-w-4xl mx-auto">
          <div className="flex flex-wrap gap-2 mb-4">
            {post.tags.map((tag) => (
              <span key={tag} className="tag bg-white/20 backdrop-blur-sm">
                {tag}
              </span>
            ))}
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            {post.title}
          </h1>
          <div className="flex items-center flex-wrap gap-4 text-white">
            <div className="flex items-center">
              <div className="w-10 h-10 rounded-full overflow-hidden mr-2">
                <img
                  src={post.authorImage}
                  alt={post.author}
                  className="w-full h-full object-cover"
                />
              </div>
              <span>{post.author}</span>
            </div>
            <div className="flex items-center">
              <CalendarDays className="h-4 w-4 mr-1" />
              <span>{post.date}</span>
            </div>
          </div>
        </div>
      </div>


      {/* Blog content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div
          className="blog-content prose prose-lg max-w-none"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </div>

      {/* Related posts */}
      <div className="bg-muted py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold mb-8">Related Articles</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Todo Related Posts  */}
            {[1, 3].map((blog, index) => (
              <BlogCard key={index} {...blogPost} />
            ))}
          </div>
        </div>
      </div>
    </main>
  )
}

export default BlogDetails
