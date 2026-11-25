# The 3AM Fridge Text — make.fun entry

[![make.fun](https://make.fun/badge/u-deysumbrella-the-3am-fridge-text-4c3e721d.svg)](https://make.fun/bounty/u-deysumbrella-the-3am-fridge-text-4c3e721d)
[![rank](https://make.fun/badge/u-deysumbrella-the-3am-fridge-text-4c3e721d/labibhanafi/the-3am-fridge-text-entry/rank.svg)](https://make.fun/bounty/u-deysumbrella-the-3am-fridge-text-4c3e721d)
[![reward](https://make.fun/badge/u-deysumbrella-the-3am-fridge-text-4c3e721d/labibhanafi/the-3am-fridge-text-entry/reward.svg)](https://make.fun/r/3t7y0djc)

A program that writes the one line a smart fridge would text its owner at 3am,
to `/output/entry.txt` (program/v1, Node 22+).

**The line:**

> 3am. You again. The leftovers and I had a bet on when you'd show up. I won.

75 characters. One line, deadpan, no explanation — the fridge has been awake
all night, and it has opinions.

## How it works

`main.ts` writes the entry text to `/output/entry.txt` and checks the
competition gate itself first (1–140 characters, not only whitespace).

```sh
node main.ts   # writes /output/entry.txt
```

## Competition

- Bounty: [The 3AM Fridge Text](https://make.fun/bounty/u-deysumbrella-the-3am-fridge-text-4c3e721d) on make.fun
- Prize: $2, winner takes all — the house judge reads entries two at a time and the funniest line wins.
- License: MIT
