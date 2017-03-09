Release History
---------------
## [Unreleased]

### Breaking change
- `angularInputs` changed to `escapeStrings` to accommodate for more uses cases, so instead of typing `myInput` to escape the angular input `[myInput]` you now need to type `[myInput]`. This also works for `[(myInput)]` or `#myTemplateVar` (otherwise they will be rendered as `[(myinput)]` and `#mytemplatevar`). 

# [1.1.0] - 2017-01-19

### Breaking change
- Selector changed from `AddExample` to `exemplify`

### Added
- Option for passing angular inputs (see issue #1)
- Option for passing custom texts

### Fixed
- Layout when using bootstrap 4 alpha 6

# [1.0.0] - 2017-01-03

### Added
- Added show/hide toggle function

### Changed
- Behaviour for nested elements, ie. if element becomes nested due to `*ngIf` or other directives

# [1.0.0-rc.1] - 2017-01-03

### Added
- First version with documentation and examples
