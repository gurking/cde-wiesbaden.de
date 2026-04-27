export default defineAppConfig({
  ui: {
    icons: {
      light: 'i-lucide-moon',
      dark: 'i-lucide-sun'
    },
    colors: {
      primary: 'navy',
      neutral: 'slate'
    },
    button: {
      defaultVariants: {
        color: 'primary',
        variant: 'solid'
      },
      slots: {
        base: 'rounded-sm'
      }
    },
    card: {
      slots: {
        root: 'rounded-none border border-[color:var(--cde-card-border)] bg-[color:var(--cde-card-bg)] shadow-none ring-0'
      }
    },
    input: {
      slots: {
        base: 'rounded-none'
      }
    }
  }
})
