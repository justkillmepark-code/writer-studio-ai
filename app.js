import { useState } from "react"; import { Button } from "@/components/ui/button"; import { Card, CardContent } from "@/components/ui/card"; import { motion } from "framer-motion";

export default function LandingPage() { return ( <div className="min-h-screen bg-black text-white p-6"> {/* HERO */} <section className="text-center py-20"> <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-5xl font-bold mb-6" > Writer Studio AI </motion.h1>

<p className="text-lg max-w-xl mx-auto mb-8">
      Write smarter with AI. Generate stories, control characters, and build entire worlds effortlessly.
    </p>

    <Button className="text-lg px-6 py-3 rounded-2xl">
      Try Free
    </Button>
  </section>

  {/* FEATURES */}
  <section className="grid md:grid-cols-3 gap-6 mb-20">
    {[
      {
        title: "AI Writing",
        desc: "Continue stories instantly with intelligent AI"
      },
      {
        title: "Character Voices",
        desc: "Each character speaks with a unique personality"
      },
      {
        title: "Story Memory",
        desc: "AI remembers your entire book"
      }
    ].map((f, i) => (
      <Card key={i} className="rounded-2xl shadow-xl">
        <CardContent className="p-6">
          <h3 className="text-xl font-bold mb-2">{f.title}</h3>
          <p className="text-sm">{f.desc}</p>
        </CardContent>
      </Card>
    ))}
  </section>

  {/* PRICING */}
  <section className="text-center mb-20">
    <h2 className="text-3xl font-bold mb-6">Pricing</h2>

    <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
      <Card className="rounded-2xl">
        <CardContent className="p-6">
          <h3 className="text-xl font-bold">Free</h3>
          <p className="text-sm my-4">Limited AI usage</p>
          <Button>Start Free</Button>
        </CardContent>
      </Card>

      <Card className="rounded-2xl border-2 border-white">
        <CardContent className="p-6">
          <h3 className="text-xl font-bold">Premium</h3>
          <p className="text-sm my-4">Unlimited AI + features</p>
          <Button>Upgrade</Button>
        </CardContent>
      </Card>
    </div>
  </section>

  {/* CTA */}
  <section className="text-center">
    <h2 className="text-3xl font-bold mb-4">
      Start Writing Today
    </h2>
    <Button className="text-lg px-6 py-3">
      Launch App
    </Button>
  </section>
</div>

); }