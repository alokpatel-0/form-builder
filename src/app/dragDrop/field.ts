export const fieldsList = [
  {
    autofocus: false,
    input: true,
    tableView: true,
    label: 'Text Area',
    key: 'undefinedTextArea',
    placeholder: '',
    prefix: '',
    suffix: '',
    rows: 3,
    multiple: false,
    defaultValue: '',
    protected: false,
    persistent: true,
    hidden: false,
    wysiwyg: false,
    clearOnHide: true,
    spellcheck: true,
    validate: {
      required: false,
      minLength: '',
      maxLength: '',
      pattern: '',
      custom: '',
    },
    type: 'textarea',
    $$hashKey: 'object:920',
    labelPosition: 'top',
    inputFormat: 'plain',
    tags: [],
    conditional: {
      show: '',
      when: null,
      eq: '',
    },
    properties: {},
  },
  {
    autofocus: false,
    input: true,
    tableView: true,
    label: 'Select Boxes',
    key: 'undefinedSelectBoxes',
    values: [
      {
        value: '',
        label: '',
        shortcut: '',
      },
    ],
    inline: false,
    protected: false,
    persistent: true,
    hidden: false,
    clearOnHide: true,
    validate: {
      required: false,
    },
    type: 'selectboxes',
    $$hashKey: 'object:663',
    labelPosition: 'top',
    optionsLabelPosition: 'right',
    conditional: {
      show: '',
      when: null,
      eq: '',
    },
  },
  {
    autofocus: false,
    input: true,
    tableView: true,
    inputType: 'text',
    inputMask: '',
    label: 'Text',
    key: 'undefinedText',
    placeholder: '',
    prefix: '',
    suffix: '',
    multiple: false,
    defaultValue: '',
    protected: false,
    unique: false,
    persistent: true,
    hidden: false,
    clearOnHide: true,
    spellcheck: true,
    validate: {
      required: false,
      minLength: '',
      maxLength: '',
      pattern: '',
      custom: '',
      customPrivate: false,
    },
    conditional: {
      show: '',
      when: null,
      eq: '',
    },
    type: 'textfield',
    $$hashKey: 'object:1413',
    labelPosition: 'top',
    inputFormat: 'plain',
    tags: [],
    properties: {},
  },
  {
    autofocus: false,
    input: true,
    tableView: true,
    inputType: 'number',
    label: 'Number',
    key: 'undefinedNumber',
    placeholder: '',
    prefix: '',
    suffix: '',
    defaultValue: '',
    protected: false,
    persistent: true,
    hidden: false,
    clearOnHide: true,
    validate: {
      required: false,
      min: '',
      max: '',
      step: 'any',
      integer: '',
      multiple: '',
      custom: '',
    },
    type: 'number',
    $$hashKey: 'object:1229',
    labelPosition: 'top',
    tags: [],
    conditional: {
      show: '',
      when: null,
      eq: '',
    },
    properties: {},
  },
  {
    autofocus: false,
    input: true,
    inputType: 'checkbox',
    tableView: true,
    label: 'Check-box',
    dataGridLabel: false,
    key: 'undefinedCheckboxField',
    defaultValue: false,
    protected: false,
    persistent: true,
    hidden: false,
    name: '',
    value: '',
    clearOnHide: true,
    validate: {
      required: false,
    },
    type: 'checkbox',
    labelPosition: 'right',
    $$hashKey: 'object:781',
    hideLabel: true,
    tags: [],
    conditional: {
      show: '',
      when: null,
      eq: '',
    },
    properties: {},
  },
  {
    autofocus: false,
    input: true,
    tableView: false,
    inputType: 'password',
    label: 'Password',
    key: 'undefinedPassword',
    placeholder: '',
    prefix: '',
    suffix: '',
    protected: true,
    persistent: true,
    hidden: false,
    clearOnHide: true,
    type: 'password',
    $$hashKey: 'object:1080',
    labelPosition: 'top',
    tags: [],
    conditional: {
      show: '',
      when: null,
      eq: '',
    },
    properties: {},
  },
  {
    autofocus: false,
    input: true,
    tableView: true,
    label: 'Select',
    key: 'undefinedSelect',
    placeholder: '',
    data: {
      values: [
        {
          value: 'select',
          label: 'option 0',
          $$hashKey: 'object:630',
        },
        {
          value: 'option 1',
          label: 'option 1',
          $$hashKey: 'object:630',
        },
        {
          value: 'option 2',
          label: 'option 2',
          $$hashKey: 'object:630',
        },
        {
          value: 'option 3',
          label: 'option 3',
          $$hashKey: 'object:630',
        },
      ],
      json: '',
      url: '',
      resource: '',
      custom: '',
    },
    dataSrc: 'values',
    valueProperty: '',
    defaultValue: '',
    refreshOn: '',
    filter: '',
    authenticate: false,
    template: '<span>{{ item.label }}</span>',
    multiple: false,
    protected: false,
    unique: false,
    persistent: true,
    hidden: false,
    clearOnHide: true,
    validate: {
      required: false,
    },
    type: 'select',
    $$hashKey: 'object:532',
    labelPosition: 'top',
    tags: [],
    conditional: {
      show: '',
      when: null,
      eq: '',
    },
    properties: {},
  },
  {
    autofocus: false,
    input: true,
    tableView: true,
    inputType: 'radio',
    label: 'Radio',
    key: 'undefinedRadio',
    values: [
      {
        value: '',
        label: '',
        shortcut: '',
      },
    ],
    defaultValue: '',
    protected: false,
    fieldSet: false,
    persistent: true,
    hidden: false,
    clearOnHide: true,
    validate: {
      required: false,
      custom: '',
      customPrivate: false,
    },
    type: 'radio',
    $$hashKey: 'object:381',
    labelPosition: 'top',
    optionsLabelPosition: 'right',
    tags: [],
    conditional: {
      show: '',
      when: null,
      eq: '',
    },
    properties: {},
  },
  {
    type: 'button',
    theme: 'primary',
    disableOnInvalid: true,
    action: 'submit',
    block: false,
    rightIcon: '',
    leftIcon: '',
    size: 'md',
    key: 'submit',
    tableView: false,
    label: 'Submit',
    input: true,
    $$hashKey: 'object:22',
    autofocus: false,
  },
];
