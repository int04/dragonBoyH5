import since04 from '../config/since04.js';
let recorder;
let chunks = [];

class Since04Sound extends since04 {
    constructor() {
        super();
        this.timeVoice = 0;
        this.autoVoice = 0;
        this.voiceCheck();
        this.TimeClose = 0;
    }

    voiceOn = () => {
        this.startRecording();
        this.danger(this._('Đã bật mic, vui lòng phát ngôn lịch sự.'));
        this.TimeClose = Date.now() + 30000;
    }

    voiceOff = () => {
        this.autoVoice = false;
        this.danger(this._('Đã tắt mic. Người xung quanh sẽ không nghe thấy bạn nói.'));
        this.stopRecording();
    }

    voiceCheck = () => {

        if(this.TimeClose < Date.now() && this.autoVoice)
        {
            this.voiceOff();
            this.CreateDisplayOnScreen();
        }
        if (this.timeVoice < Date.now() && this.autoVoice) {
            this.timeVoice = 0;
            this.stopRecording();
        }

        setTimeout(() => {
            this.voiceCheck();
        }, 500);

    }

    startRecording = () => {
        let self = this;
        navigator.mediaDevices.getUserMedia({
                audio: true
            })
            .then((stream) => {
                const AudioContext = window.AudioContext || window.webkitAudioContext;
                const audioContext = new AudioContext();
                const input = audioContext.createMediaStreamSource(stream);
                recorder = new Recorder(input);

                this.autoVoice = true;

                recorder.record();
            })
            .catch((error) => {
                console.error('Error accessing microphone:', error);
            });
    }

    stopRecording = () => {
        let self = this;
        if (recorder) {
            recorder.stop();
            recorder.exportWAV((blob) => {
                const reader = new FileReader();
                reader.onload = () => {
                    const arrayBuffer = reader.result;
                    if(this.autoVoice == true)
                    {
                        this.startRecording();
                    }
                    this.to('audioData', arrayBuffer);
                };
                reader.readAsArrayBuffer(blob);
            });
            recorder.clear();
        }
    }


    coverAudio = (data) => {

        const blob = new Blob([data], {
            type: 'audio/webm'
        });
        const reader = new FileReader();
        reader.onload = () => {
            const arrayBuffer = reader.result;
            this.to('audioData', arrayBuffer);
        };
        reader.readAsArrayBuffer(blob);
    }


    playAudio = (data) => {
        console.log(data)
        let id = data._2;

        let player = this.my.id == id ? NhanVat : this.nguoichoi.getChildByName(id);
        if(player) {
            player.sound = true;
        }

        data = data._1;
        const blob = new Blob([data], {
            type: 'audio/webm'
        });

        // Tạo URL đại diện cho Blob
        const blobUrl = URL.createObjectURL(blob);

        // Tạo đối tượng Howl từ URL âm thanh
        const sound = new Howl({
            src: [blobUrl],
            format: ['webm'],
        });
        // set max volume
        // Phát lại âm thanh
        sound.play();
        sound.on('end', () => {
            let player = this.my.id == id ? NhanVat : this.nguoichoi.getChildByName(id);
            if(player) {
                player.sound = false;
            }
        });
        // 
    }

    stopRecording_atMy = () => {
        recorder.addEventListener('stop', () => {
            const audioBlob = new Blob(chunks);
            const audioUrl = URL.createObjectURL(audioBlob);
            const audio = new Audio(audioUrl);
            audio.play();
        });
        recorder.stop();
    }

}
export default Since04Sound;