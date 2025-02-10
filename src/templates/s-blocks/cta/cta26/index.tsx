import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";

interface CryptoData {
  name: string;
  symbol: string;
  price: number;
  change: number;
  marketCap: number;
}

const cryptoData: CryptoData[] = [
  {
    name: "Bitcoin",
    symbol: "BTC",
    price: 38716.43,
    change: -10.82,
    marketCap: 729729745340.82,
  },
  {
    name: "Ethereum",
    symbol: "ETH",
    price: 2818.15,
    change: -13.88,
    marketCap: 333396739452.23,
  },
  {
    name: "Cardano",
    symbol: "ADA",
    price: 1.22,
    change: 3.76,
    marketCap: 40465663783.16,
  },
  {
    name: "Dogecoin",
    symbol: "DOGE",
    price: 0.153765,
    change: 8.39,
    marketCap: 729729745340.82,
  },
  {
    name: "Polkadot",
    symbol: "DOT",
    price: 22.24,
    change: -13.17,
    marketCap: 21710483995.43,
  },
];

export default function CallToAction26() {
  return (
    <section className="bg-background py-16 text-foreground">
      <div className="container mx-auto max-w-5xl px-4">
        <div className="mb-12 text-center">
          <h1 className="mb-4 text-4xl font-bold md:text-5xl">
            Buy crypto at true cost
          </h1>
          <p className="text-lg text-muted-foreground">
            Buy and sell 250+ cryptocurrencies with 20+ fiat currencies using
            bank transfers or your credit/debit card.
          </p>
        </div>

        <Table>
          <TableBody>
            {cryptoData.map((crypto) => (
              <TableRow key={crypto.symbol}>
                <TableCell className="font-medium">
                  <div className="flex items-center gap-2">
                    <span>{crypto.name}</span>
                    <span className="text-muted-foreground">
                      {crypto.symbol}
                    </span>
                  </div>
                </TableCell>
                <TableCell className="font-mono">
                  $
                  {crypto.price.toLocaleString(undefined, {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 6,
                  })}
                </TableCell>
                <TableCell
                  className={
                    crypto.change > 0 ? "text-emerald-500" : "text-destructive"
                  }
                >
                  {crypto.change > 0 ? "+" : ""}
                  {crypto.change.toFixed(2)}%
                </TableCell>
                <TableCell className="font-mono text-muted-foreground">
                  $
                  {crypto.marketCap.toLocaleString(undefined, {
                    maximumFractionDigits: 2,
                  })}
                </TableCell>
                <TableCell className="text-right">
                  <Button variant="secondary" size="sm">
                    Trade
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>

        <div className="mt-12 text-center">
          <p className="mb-4 text-muted-foreground">
            Sign up now to build your own portfolio for free!
          </p>
          <Button size="lg" className="px-8">
            Sign Up Now
          </Button>
        </div>
      </div>
    </section>
  );
}
