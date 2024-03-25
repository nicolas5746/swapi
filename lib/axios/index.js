import axios from 'axios';

export const characters = async (req, res) => {
    const url = 'https://api.npoint.io/82e93dcbe328a2cbca58';

    try {
        const { data } = await axios.get(url);
        res.status(200).send(data);
    } catch (error) {
        res.status(500).send(error.data);
    }
}