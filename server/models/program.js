import mongoose from 'mongoose';
import { v4 as uuid } from 'uuid';

const programSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    unique: true,
  },
  description: {
    type: String,
    required: true,
  },
  baseCost: {
    type: Number,
    required: true,
  },
  duration: {
    type: Number,
    required: true,
  },
  items: [{
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    brand: {
      type: String,
      required: true,
    },
    dosage: {
      quantityOneTime: Number,
      medicationPerDay: Number,
    },
    linkToCart: {
      type: String,
    },
  }],
});
programSchema.static('generateEvents', async function (date, program_id) {
  const events = [];
  const program = await this.findOne({ _id: program_id });

  program.items.map(item => {

    switch (item.dosage.medicationPerDay) {
      case 3:
        for (let i = 0; i < program.duration; i++) {
          addEventToArray({
            start: new Date(6 * 3600 * 1000 + date + i * 24 * 3600 * 1000),
            end: new Date(9 * 3600 * 1000 + date + i * 24 * 3600 * 1000),
            title: item.title + ', ' + item.description + ', ' + item.brand,
          }, events);
          addEventToArray({
            start: new Date(12 * 3600 * 1000 + date + i * 24 * 3600 * 1000),
            end: new Date(15 * 3600 * 1000 + date + i * 24 * 3600 * 1000),
            title: item.title + ', ' + item.description + ', ' + item.brand,
          }, events);
          addEventToArray({
            start: new Date(18 * 3600 * 1000 + date + i * 24 * 3600 * 1000),
            end: new Date(21 * 3600 * 1000 + date + i * 24 * 3600 * 1000),
            title: item.title + ', ' + item.description + ', ' + item.brand,
          }, events);
        }
        break;
      case 2:
        for (let i = 0; i < program.duration; i++) {
          addEventToArray({
            start: new Date(6 * 3600 * 1000 + date + i * 24 * 3600 * 1000),
            end: new Date(9 * 3600 * 1000 + date + i * 24 * 3600 * 1000),
            title: item.title + ', ' + item.description + ', ' + item.brand,
          }, events);
          addEventToArray({
            start: new Date(18 * 3600 * 1000 + date + i * 24 * 3600 * 1000),
            end: new Date(21 * 3600 * 1000 + date + i * 24 * 3600 * 1000),
            title: item.title + ', ' + item.description + ', ' + item.brand,
          }, events);
        }
        break;
      case 1:
        for (let i = 0; i < program.duration; i++) {
          addEventToArray({
            start: new Date(6 * 3600 * 1000 + date + i * 24 * 3600 * 1000),
            end: new Date(9 * 3600 * 1000 + date + i * 24 * 3600 * 1000),
            title: item.title + ', ' + item.description + ', ' + item.brand,
          }, events);
        }
        break;
      case -1:
        for (let i = 0; i < program.duration; i++) {
          addEventToArray({
            start: new Date(18 * 3600 * 1000 + date + i * 24 * 3600 * 1000),
            end: new Date(21 * 3600 * 1000 + date + i * 24 * 3600 * 1000),
            title: item.title + ', ' + item.description + ', ' + item.brand,
          }, events);
        }
        break;
      case 0.1:
        addEventToArray({
          start: new Date(18 * 3600 * 1000 + date),
          end: new Date(21 * 3600 * 1000 + date),
          title: item.title + ', ' + item.description + ', ' + item.brand,
        }, events);
        break;
      case -0.1:
        addEventToArray({
          start: new Date(18 * 3600 * 1000 + date + program.duration * 24 * 3600 * 1000),
          end: new Date(21 * 3600 * 1000 + date + program.duration * 24 * 3600 * 1000),
          title: item.title + ', ' + item.description + ', ' + item.brand,
        }, events);
        break;
      default:
        break;
    }
  }); 
  return events;
});

function addEventToArray(event, eventsArray) {
  const index = eventsArray.findIndex(el => el.start.toString() === event.start.toString());

  if (index !== -1) {
    eventsArray[index].title += '\n' + event.title;
  } else {
    eventsArray.push({
      start: event.start,
      end: event.end,
      title: event.title,
      shortUrl: uuid(),
    });
  };
}

export default mongoose.model('Program', programSchema);
