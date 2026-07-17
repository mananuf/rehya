"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { CheckCircle2 } from "lucide-react";

export type Field = {
  name: string;
  label: string;
  type: "text" | "email" | "tel" | "textarea" | "select";
  required?: boolean;
  options?: string[];
  placeholder?: string;
};

/**
 * Prototype form: validates client-side and shows a success state.
 * No data leaves the browser — submission wiring comes with the production backend.
 */
export function StaticForm({
  fields,
  submitLabel,
  successTitle,
  successBody,
  footnote,
}: {
  fields: Field[];
  submitLabel: string;
  successTitle: string;
  successBody: string;
  footnote?: string;
}) {
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <div role="status" className="border border-primary/30 bg-secondary p-10 text-center">
        <CheckCircle2 className="w-10 h-10 text-primary mx-auto mb-4" />
        <h3 className="text-2xl font-display text-foreground">{successTitle}</h3>
        <p className="mt-2 text-sm text-muted-foreground leading-relaxed max-w-md mx-auto">
          {successBody}
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setSubmitted(true);
      }}
      className="space-y-5"
    >
      {fields.map((f) => (
        <div key={f.name} className="space-y-1.5">
          <Label htmlFor={f.name} className="text-sm text-foreground">
            {f.label}
            {!f.required && (
              <span className="ml-1.5 text-xs font-normal text-muted-foreground">
                (optional)
              </span>
            )}
          </Label>
          {f.type === "textarea" ? (
            <Textarea
              id={f.name}
              name={f.name}
              required={f.required}
              rows={5}
              placeholder={f.placeholder}
              className="bg-white"
            />
          ) : f.type === "select" ? (
            <select
              id={f.name}
              name={f.name}
              required={f.required}
              defaultValue=""
              className="flex h-9 w-full border border-input bg-white px-3 py-1 text-sm shadow-xs focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/50"
            >
              <option value="" disabled>
                {f.placeholder ?? "Select…"}
              </option>
              {f.options?.map((o) => (
                <option key={o} value={o}>
                  {o}
                </option>
              ))}
            </select>
          ) : (
            <Input
              id={f.name}
              name={f.name}
              type={f.type}
              required={f.required}
              placeholder={f.placeholder}
              className="bg-white"
            />
          )}
        </div>
      ))}
      <Button
        type="submit"
        className="rounded-full bg-primary hover:bg-primary/90 text-white px-8"
      >
        {submitLabel}
      </Button>
      {footnote && (
        <p className="text-xs text-muted-foreground leading-relaxed">{footnote}</p>
      )}
    </form>
  );
}
