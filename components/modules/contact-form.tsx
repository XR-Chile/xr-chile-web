"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const formSchema = z.object({
  name: z.string().min(1, {
    message: "Por favor ingrese un nombre.",
  }),
  mail: z.string().email({
    message: "Por favor ingrese un correo electrónico.",
  }),
  message: z.string(),
});

export default function ContactForm() {
  const contactForm = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      mail: "",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  return (
    <Form {...contactForm}>
      <form onSubmit={contactForm.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={contactForm.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Nombre o Empresa</FormLabel>
              <FormControl>
                <Input placeholder="Nombre Apellido o Empresa" {...field} />
              </FormControl>
              <FormDescription>¿Cómo nos dirigirnos a usted?</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={contactForm.control}
          name="mail"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Correo Electrónico</FormLabel>
              <FormControl>
                <Input placeholder="ejemplo@dominio.com" {...field} />
              </FormControl>
              <FormDescription>¿A qué correo respondemos?</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={contactForm.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Mensaje</FormLabel>
              <FormControl>
                <Textarea placeholder="Díganos que necesita" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
}
