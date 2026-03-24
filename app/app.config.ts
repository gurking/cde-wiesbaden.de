export default defineAppConfig({
  ui: {
    colors: {
      primary: 'coral',
      neutral: 'slate'
    },
    button: {
      defaultVariants: {
        color: 'primary'
      }
    },
    card: {
      slots: {
        root: 'rounded-2xl border border-slate-200/80 bg-white/95 shadow-sm ring-0'
      }
    }
  }
})
