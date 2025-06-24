let pronoun = ['Super', 'Mega', 'Mini', 'Minute', 'Medium', 'Normal'];
let adjective = ['duper', 'mind', 'supper', 'detail', 'rare', 'time'];
let noun = ['break', 'crumble', 'wipeout', 'slash', 'null', 'complete'];
let description = ['game', 'network', 'surfing', 'sports', 'tube', 'crisis'];
let domain = ['.com', '.io', '.en', '.es', '.gov', '.info'];

const combinations = () =>{

    for (let index = 0; index < pronoun.length; index++) {
        const elements = pronoun[index];

        for (let indexAdjective = 0; indexAdjective < adjective.length; indexAdjective++) {
            const eleAdjective = adjective[indexAdjective];

            for (let indexNoun = 0; indexNoun < noun.length; indexNoun++) {
                const nounNoun = noun[indexNoun];

                for (let indexDomain = 0; indexDomain < domain.length; indexDomain++){
                    const domDomain = domain[indexDomain];

                    let result = `${elements}${eleAdjective}${nounNoun}${domDomain}`;
                    console.log(result);
                } 
            }
        }

    }

}

combinations() 