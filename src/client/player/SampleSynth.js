import * as soundworks from 'soundworks/client';
const audioContext = soundworks.audioContext;

export default class SampleSynth {
  constructor(bufferInfos) {
    this.bufferInfos = bufferInfos;

    this.output = audioContext.createGain();
    this.output.gain.value = 1;

    this.localEchoGain = 0;
  }

  connect(destination) {
    this.output.connect(destination);
  }

  trigger(time, params, counter) {
    time = Math.max(time, audioContext.currentTime);
    const bufferInfos = this.bufferInfos;

    const gain = counter === 0 ? params.gain : params.gain * this.localEchoGain;
    const { x, y, midiKey } = params;

    // center note
    const s1Infos = bufferInfos[midiKey];
    const s1Buffer = s1Infos.file;
    const s1Detune = s1Infos.detune;
    const s1Gain = 2 * (0.5 - Math.abs(x - 0.5));

    const g1 = audioContext.createGain();
    g1.connect(this.output);
    g1.gain.value = s1Gain * gain;

    const s1 = audioContext.createBufferSource();
    s1.connect(g1);
    s1.buffer = s1Buffer;
    s1.detune.value = s1Detune;
    s1.start(time);

    // octava source
    const midiOffset = x < 0.5 ? -12 : 12;

    const s2Infos = bufferInfos[midiKey + midiOffset];
    const s2Buffer = s2Infos.file;
    const s2Detune = s2Infos.detune;
    const s2Gain = 2 * Math.abs(x - 0.5);

    const g2 = audioContext.createGain();
    g2.connect(this.output);
    g2.gain.value = s2Gain * gain;

    const s2 = audioContext.createBufferSource();
    s2.connect(g2);
    s2.buffer = s2Buffer;
    s2.detune.value = s2Detune;
    s2.start(time);

    let duration = 0;
    duration += s1Gain * s1Buffer.duration;
    duration += s2Gain * s1Buffer.duration;

    return duration;
  }
}
