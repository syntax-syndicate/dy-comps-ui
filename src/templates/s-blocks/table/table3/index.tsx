import React from "react";

import { Card } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const data = [
  {
    rank: 1,
    model: "ChatGPT-4o-latest (2024-02-08)",
    score: 1334,
    ci: "+3/-6",
    votes: 9132,
    organization: "OpenAI",
    license: "Proprietary",
    cutoff: "2023/10",
  },
  {
    rank: 2,
    model: "Gemini-1.5-Pro-Exp-0827",
    score: 1299,
    ci: "+4/-3",
    votes: 27223,
    organization: "Google",
    license: "Proprietary",
    cutoff: "2023/11",
  },
  {
    rank: 3,
    model: "GPT-4o-2024-06-13",
    score: 1285,
    ci: "+3/-3",
    votes: 98035,
    organization: "OpenAI",
    license: "Proprietary",
    cutoff: "2023/10",
  },
  {
    rank: 4,
    model: "GPT-4o-mini-2024-07-18",
    score: 1273,
    ci: "+4/-4",
    votes: 29755,
    organization: "OpenAI",
    license: "Proprietary",
    cutoff: "2023/10",
  },
  {
    rank: 5,
    model: "Claude 3.5 Sonnet",
    score: 1269,
    ci: "+3/-3",
    votes: 61859,
    organization: "Anthropic",
    license: "Proprietary",
    cutoff: "2024/4",
  },
  {
    rank: 6,
    model: "Gemini-1.5-Flash-Exp-0827",
    score: 1269,
    ci: "+5/-4",
    votes: 21554,
    organization: "Google",
    license: "Proprietary",
    cutoff: "2023/11",
  },
  {
    rank: 7,
    model: "Meta-Llama-3.1-405b-Instruct-bf16",
    score: 1266,
    ci: "+6/-7",
    votes: 5516,
    organization: "Meta",
    license: "Llama 3.1 Community",
    cutoff: "2023/12",
  },
  {
    rank: 8,
    model: "Meta-Llama-3.1-405b-Instruct-fp8",
    score: 1266,
    ci: "+3/-3",
    votes: 30608,
    organization: "Meta",
    license: "Llama 3.1 Community",
    cutoff: "2023/12",
  },
  {
    rank: 9,
    model: "GPT-4o-2024-08-06",
    score: 1263,
    ci: "+4/-4",
    votes: 21825,
    organization: "OpenAI",
    license: "Proprietary",
    cutoff: "2023/10",
  },
  {
    rank: 10,
    model: "GPT-4o-mini",
    score: 1263,
    ci: "+4/-4",
    votes: 21825,
    organization: "OpenAI",
    license: "Proprietary",
    cutoff: "2023/10",
  },
];

const ModelComparisonTable = () => {
  return (
    <div className="container py-16">
      <h1 className="mb-4 text-center text-4xl font-bold">
        AI Model Comparison
      </h1>
      <h2 className="mb-10 text-center text-2xl text-muted-foreground">
        Top 10 AI Models Ranked by Performance
      </h2>
      <Card className="mt-10 p-10">
        <Table>
          <TableCaption>AI Model Comparison Table</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">Rank* (UB)</TableHead>
              <TableHead>Model</TableHead>
              <TableHead>Arena Score</TableHead>
              <TableHead>95% CI</TableHead>
              <TableHead>Votes</TableHead>
              <TableHead>Organization</TableHead>
              <TableHead>License</TableHead>
              <TableHead>Knowledge Cutoff</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data.map((row, index) => (
              <TableRow key={index}>
                <TableCell>{row.rank}</TableCell>
                <TableCell>{row.model}</TableCell>
                <TableCell>{row.score}</TableCell>
                <TableCell>{row.ci}</TableCell>
                <TableCell>{row.votes.toLocaleString()}</TableCell>
                <TableCell>{row.organization}</TableCell>
                <TableCell>{row.license}</TableCell>
                <TableCell>{row.cutoff}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Card>
    </div>
  );
};

export default ModelComparisonTable;
