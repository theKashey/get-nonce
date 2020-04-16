# get-nonce

just returns a **nonce** (number used once). No batteries included in those 46 bytes of this library.

---

- ✅ build in `webpack` support via `__webpack_nonce__`

# API

- `getNonce(): string|undefined` - returns the current `nonce`
- `setNonce(newValue)` - set's nonce value

## Why?

Why we need a library to access `__webpack_nonce__`? Abstractions!

"I", as a library author, don't want to "predict" the platform "you" going to use.
"I", as well, want an easier way to test and control `nonce` value.

Like - `nonce` is supported out of the box only by webpack, what you are going to do?

This is why this "man-in-the-middle" was created.
Yep, think about `left-pad` :)

## Used in

- `react-style-singleton` <- `react-remove-scroll` <- `react-focus-on`

# Licence

MIT
