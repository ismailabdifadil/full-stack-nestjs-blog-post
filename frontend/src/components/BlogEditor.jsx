<<<<<<< HEAD
import { useState } from "react";
=======
import { useState, useTransition } from "react";
>>>>>>> 05d20f51ac2e90b57d9ccef1b7bc3ffecb3cb4b3
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
<<<<<<< HEAD
import { toast } from "react-hot-toast";
import { ImageIcon, X } from "lucide-react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Textarea } from "./ui/textarea";
import { useCreatePostMutation } from "../lib/services/postApiSlice";
const BlogEditor = ({ initialData, onSubmit, isEdit = false }) => {
=======
import { ImageIcon, X } from "lucide-react";
import { toast } from "sonner";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Textarea } from "./ui/textarea";

const BlogEditor = ({ initialData, onSubmit, isEdit = false }) => {
  const [isPending, startTransition] = useTransition();
>>>>>>> 05d20f51ac2e90b57d9ccef1b7bc3ffecb3cb4b3
  const [imagePreview, setImagePreview] = useState(
    initialData?.coverImage || null
  );
  const [tags, setTags] = useState(initialData?.tags || []);
  const [tagInput, setTagInput] = useState("");

<<<<<<< HEAD
  const [createPost, { isLoading: isCreating }] = useCreatePostMutation();

=======
>>>>>>> 05d20f51ac2e90b57d9ccef1b7bc3ffecb3cb4b3
  const navigate = useNavigate();

  const form = useForm({
    defaultValues: {
      title: initialData?.title || "",
      content: initialData?.content || "",
<<<<<<< HEAD
      coverImage:
        initialData?.coverImage ||
        "https://images.unsplash.com/photo-1592424002053-21f369ad7fdb?auto=format&fit=crop&q=80",
=======
      coverImage: initialData?.coverImage || "",
>>>>>>> 05d20f51ac2e90b57d9ccef1b7bc3ffecb3cb4b3
    },
  });

  const handleImageChange = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
        form.setValue("coverImage", reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const addTag = () => {
    if (tagInput && !tags.includes(tagInput)) {
      setTags([...tags, tagInput]);
      setTagInput("");
    }
  };

  const removeTag = (tagToRemove) => {
    setTags(tags.filter((tag) => tag !== tagToRemove));
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      addTag();
    }
  };

<<<<<<< HEAD
  const handleSubmit = async (data) => {
    try {
      const blogData = { ...data, tags };
      await createPost(blogData).unwrap();
      toast.success(
        `Blog post ${isEdit ? "updated" : "created"} successfully!`
      );
      navigate("/");
    } catch (error) {
      toast.error("Failed to save blog post. Please try again.");
      console.error(error);
    }
=======
  const handleSubmit = (data) => {
    startTransition(() => {
      try {
        const blogData = { ...data, tags };
        onSubmit(blogData);
        toast.success(
          `Blog post ${isEdit ? "updated" : "created"} successfully!`
        );
        navigate("/");
      } catch (error) {
        toast.error("Failed to save blog post. Please try again.");
        console.error(error);
      }
    });
>>>>>>> 05d20f51ac2e90b57d9ccef1b7bc3ffecb3cb4b3
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">
        {isEdit ? "Edit Blog Post" : "Create New Blog Post"}
      </h1>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-6">
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Title</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Enter your blog title"
                    {...field}
                    className="text-xl"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="space-y-2">
            <FormLabel>Cover Image</FormLabel>
            <div className="flex items-center space-x-4">
              <label className="cursor-pointer flex items-center justify-center border-2 border-dashed border-gray-300 rounded-md h-12 px-4 hover:border-gray-400 transition-colors">
                <ImageIcon className="h-5 w-5 mr-2" />
                <span>Upload Image</span>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange}
                  className="hidden"
                />
              </label>
              {imagePreview && (
                <Button
                  type="button"
                  variant="outline"
                  size="sm"
                  onClick={() => {
                    setImagePreview(null);
                    form.setValue("coverImage", "");
                  }}
                >
                  Remove Image
                </Button>
              )}
            </div>

            {imagePreview && (
              <div className="mt-4 relative">
                <img
                  src={imagePreview}
                  alt="Preview"
                  className="rounded-md max-h-64 object-cover"
                />
              </div>
            )}
          </div>

          <div className="space-y-2">
            <FormLabel>Tags</FormLabel>
            <div className="flex items-center space-x-2">
              <Input
                value={tagInput}
                onChange={(e) => setTagInput(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Add tags and press Enter"
                className="flex-1"
              />
              <Button type="button" onClick={addTag} variant="secondary">
                Add
              </Button>
            </div>

            {tags.length > 0 && (
              <div className="flex flex-wrap gap-2 mt-3">
                {tags.map((tag) => (
                  <div
                    key={tag}
                    className="flex items-center bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-sm"
                  >
                    {tag}
                    <button
                      type="button"
                      onClick={() => removeTag(tag)}
                      className="ml-2 hover:text-destructive"
                    >
                      <X className="h-3 w-3" />
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>

          <FormField
            control={form.control}
            name="content"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Content</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Write your blog content here..."
                    {...field}
                    rows={15}
                    className="font-serif resize-none"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="flex items-center space-x-4">
<<<<<<< HEAD
            <Button type="submit" disabled={isCreating}>
              {isCreating
=======
            <Button type="submit" disabled={isPending}>
              {isPending
>>>>>>> 05d20f51ac2e90b57d9ccef1b7bc3ffecb3cb4b3
                ? "Saving..."
                : isEdit
                ? "Update Post"
                : "Publish Post"}
            </Button>
            <Button
              type="button"
              variant="outline"
              onClick={() => navigate("/")}
            >
              Cancel
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default BlogEditor;
