import antfu from '@antfu/eslint-config'

export default antfu({

})
  .removeRules(
    'node/prefer-global/process',
  )
