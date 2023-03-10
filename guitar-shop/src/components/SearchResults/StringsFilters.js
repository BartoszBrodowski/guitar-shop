import { useState } from 'react';
import { useDispatch } from 'react-redux';
import {
	sortAtoZ,
	sortZtoA,
	sortPriceLowToHigh,
	sortPriceHighToLow,
	changeSearchValue,
	sortByDate,
} from '../../features/stringsList/stringsListSlice';
import { filterAcoustic } from '../../features/stringsList/stringsListSlice';

const StringsFilters = () => {
	const [onlyAcoustic, setOnlyAcoustic] = useState(true);
	const [currentSort, setCurrentSort] = useState('A-Z');
	const dispatch = useDispatch();

	const sortSelectHandler = (e) => {
		if (e.target.value === 'A-Z') {
			dispatch(sortAtoZ());
			setCurrentSort('A-Z');
		}
		if (e.target.value === 'Z-A') {
			dispatch(sortZtoA());
			setCurrentSort('Z-A');
		}
		if (e.target.value === 'Price: Low to High') {
			dispatch(sortPriceLowToHigh());
			setCurrentSort('Price: Low to High');
		}
		if (e.target.value === 'Price: High to Low') {
			dispatch(sortPriceHighToLow());
			setCurrentSort('Price: High to Low');
		}
		if (e.target.value === 'Date') {
			dispatch(sortByDate());
			setCurrentSort('Date');
		}
	};

	const searchHandler = (e) => {
		dispatch(changeSearchValue(e.target.value));
	};

	const showOnlyAcousticsHandler = () => {
		setOnlyAcoustic(!onlyAcoustic);
		dispatch(filterAcoustic(onlyAcoustic));
		setCurrentSort('A-Z');
	};

	return (
		<div className='flex items-center gap-2 px-4 py-8'>
			<input
				className='border-orange-500 border h-10 p-2 outline-none'
				placeholder='Search by name'
				type='text'
				onChange={(e) => searchHandler(e)}
			/>
			<select
				className='w-60 bg-white border border-orange-500 h-10 p-2'
				name='Sort'
				value={currentSort}
				onChange={(e) => sortSelectHandler(e)}>
				<option value='A-Z'>A-Z</option>
				<option value='Z-A'>Z-A</option>
				<option value='Price: Low to High'>Price: Low to High</option>
				<option value='Price: High to Low'>Price: High to Low</option>
				<option value='Date'>Date {'(newest)'}</option>
			</select>
			<div className='flex gap-2 mr-4'>
				<h1>Acoustic Only:</h1>
				<input type='checkbox' onChange={showOnlyAcousticsHandler} />
			</div>
		</div>
	);
};

export default StringsFilters;
