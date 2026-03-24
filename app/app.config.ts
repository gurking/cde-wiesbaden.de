export default defineAppConfig({
  ui: {
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
