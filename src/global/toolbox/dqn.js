import {CategoryColors} from '@/global/colors';

function getArchitectureToolbox() {
  let toolbox = `
  <category name="DQN" colour="${CategoryColors.AI}">
    <block type="dqn_model_architecture_1">
      <value name="duration"><shadow type="math_number"><field name="NUM">1</field></shadow></value>
    </block>
    <block type="dqn_model_architecture_2">
      <value name="duration"><shadow type="math_number"><field name="NUM">1</field></shadow></value>
    </block>
    <block type="dqn_model_architecture_3">
      <value name="duration"><shadow type="math_number"><field name="NUM">1</field></shadow></value>
    </block>
    <block type="dqn_model_architecture_4">
      <value name="duration"><shadow type="math_number"><field name="NUM">1</field></shadow></value>
    </block>
    <block type="dqn_model_architecture_5">
      <value name="duration"><shadow type="math_number"><field name="NUM">1</field></shadow></value>
    </block>
    <block type="dqn_model_architecture_6">
      <value name="duration"><shadow type="math_number"><field name="NUM">1</field></shadow></value>
    </block>
    <block type="dqn_model_architecture_7">
      <value name="duration"><shadow type="math_number"><field name="NUM">1</field></shadow></value>
    </block>
  </category>
  <sep></sep>`
  return toolbox;
}

function getTrainingToolbox() {
  let toolbox = `
  <category name="DQN" colour="${CategoryColors.AI}">
    <block type="dqn_model_training_1">
      <value name="duration"><shadow type="math_number"><field name="NUM">1</field></shadow></value>
    </block>
    <block type="dqn_model_training_2">
      <value name="duration"><shadow type="math_number"><field name="NUM">1</field></shadow></value>
    </block>
    <block type="dqn_model_training_3">
      <value name="duration"><shadow type="math_number"><field name="NUM">1</field></shadow></value>
    </block>
    <block type="dqn_model_training_4">
      <value name="duration"><shadow type="math_number"><field name="NUM">1</field></shadow></value>
    </block>
    <block type="dqn_model_training_5">
      <value name="duration"><shadow type="math_number"><field name="NUM">1</field></shadow></value>
    </block>
    <block type="dqn_model_training_6">
      <value name="duration"><shadow type="math_number"><field name="NUM">1</field></shadow></value>
    </block>
    <block type="dqn_model_training_7">
      <value name="duration"><shadow type="math_number"><field name="NUM">1</field></shadow></value>
    </block>
  </category>
  <sep></sep>`
  return toolbox;
}

function getInferenceToolbox() {
  let toolbox = `
  <category name="DQN" colour="${CategoryColors.AI}">
    <block type="dqn_model_inference_1">
      <value name="duration"><shadow type="math_number"><field name="NUM">1</field></shadow></value>
    </block>
    <block type="dqn_model_inference_2">
      <value name="duration"><shadow type="math_number"><field name="NUM">1</field></shadow></value>
    </block>
    <block type="dqn_model_inference_3">
      <value name="duration"><shadow type="math_number"><field name="NUM">1</field></shadow></value>
    </block>
    <block type="dqn_model_inference_4">
      <value name="duration"><shadow type="math_number"><field name="NUM">1</field></shadow></value>
    </block>
    <block type="dqn_model_inference_5">
      <value name="duration"><shadow type="math_number"><field name="NUM">1</field></shadow></value>
    </block>
    <block type="dqn_model_inference_6">
      <value name="duration"><shadow type="math_number"><field name="NUM">1</field></shadow></value>
    </block>
    <block type="dqn_model_inference_7">
      <value name="duration"><shadow type="math_number"><field name="NUM">1</field></shadow></value>
    </block>
  </category>
  <sep></sep>`
  return toolbox;
}

export default function (data) {
  let toolbox = '';
  if (!data || !data.dqn) return toolbox;
  else if (data.dqn === '1') toolbox = getArchitectureToolbox();
  else if (data.dqn === '2') toolbox = getTrainingToolbox();
  else if (data.dqn === '3') toolbox = getInferenceToolbox();
  return toolbox;
};